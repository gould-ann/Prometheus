from twilio.rest import Client

# Your Account SID from twilio.com/console
account_sid = "AC86e9bfd69bc009af550302c46b391ae2"
# Your Auth Token from twilio.com/console
auth_token  = "07875b5ce3a6b70394d43df16880fd18"

client = Client(account_sid, auth_token)

message = client.messages.create(
    to="+18475022706", 
    from_="+15158085069",
    body="Hello from Ann and from Twilio")

print(message.sid)
