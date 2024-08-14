from flask import Flask, Response
import json

app = Flask('my web application')

data = [
    {'id': 1, 'name': 'Vinod', 'email': 'vinod@vinod.co', 'phone': '9731424784'},
    {'id': 2, 'name': 'Shyam', 'email': 'shyam@xmpl.com', 'phone': '9731424000'},
]


@app.route('/api/persons', methods=['GET'])
def get_all_persons():
    return Response(json.dumps(data), status=200, mimetype='application/json')



if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5500)
