import requests
import json

# Get data from port 3000
get_url = 'http://localhost:3000'
get_headers = {'Content-Type': 'application/json'}

data = requests.get(get_url, headers=get_headers)
print(data.text)

# Post data to port 4000
post_url = 'http://localhost:4000'
post_headers = {'Content-Type': 'application/json'}
example_data = {"m": 1, "r":-1, "f":0}
example_data = json.dumps(example_data)

response = requests.post(post_url, data=example_data, headers=post_headers)
print(response.text)
