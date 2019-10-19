import os

import pandas as pd
import numpy as np

from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine

from flask import Flask, jsonify, render_template, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)


#################################################
# Database Setup
#################################################

engine = create_engine('postgresql://postgres:,rc!7YVI@localhost/ISS')
connection = engine.connect()
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:,rc!7YVI@localhost/ISS'
db = SQLAlchemy(app)

Base = automap_base()
Base.prepare(engine, reflect=True)
Base.classes.keys()

# Save references to each table
ISS_Locations = Base.classes.locations

@app.route("/")
def index():
    """Return the homepage."""
    return render_template("index.html")

@app.route("/live")
def live():
    """Return the homepage."""
    return render_template("live.html")

@app.route("/landing")
def landing():
    """Return the homepage."""
    return render_template("landing.html")


@app.route("/CityNames")
def names():
    """Return a list of City Names."""

    # Use Pandas to perform the sql query
    stmt = db.session.query(ISS_Locations).statement
    df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    return jsonify(df.to_dict(orient='records'))


if __name__ == "__main__":
    app.run()

