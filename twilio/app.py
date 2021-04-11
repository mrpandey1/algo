from flask import Flask, request, redirect
from twilio.twiml.messaging_response import MessagingResponse

import pandas as pd
import tensorflow as tf
from tensorflow.keras.layers import Embedding
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import Sequential
from tensorflow.keras.preprocessing.text import one_hot
from tensorflow.keras.layers import LSTM
from tensorflow.keras.layers import Dense
import numpy as np

app = Flask(__name__)

model = tf.keras.models.load_model("fake-news-1.h5")

voc_size = 5000
sent_length = 20


def is_it_fake(text=[]):
    onehot_repr = [one_hot(words, voc_size) for words in text]
    embedded_docs = pad_sequences(onehot_repr, padding="pre", maxlen=sent_length)
    X_final = np.array(embedded_docs)
    y_preds = np.argmax(model.predict(X_final), axis=1)
    predictions = list(model.predict(X_final))
    percentages_1 = []
    for i in predictions:
        foo = "{:.2f}".format(i[0] * 100)
        percentages_1.append(foo)
    if percentages_1 < 50:
        return (
            "This message might be Fake. The percentage of message being Fake is"
            + percentages_1
        )
    if percentages_1 > 50:
        return (
            "This message might be Real. The percentage of message being Real is"
            + percentages_1
        )
    else:
        return "I am not sure about it"


@app.route("/sms", methods=["GET", "POST"])
def sms_reply():
    query = request.args.get("query", "", type=str)
    ans = is_it_fake([query])
    resp = MessagingResponse()
    resp.message(ans)
    return str(resp)


if __name__ == "__main__":
    app.run(debug=True)