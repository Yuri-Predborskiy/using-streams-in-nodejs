# using-streams-in-nodejs
Experimenting and learning to use streams to create non-blocking Node.JS servers.
Goals:
* stream data via http into database
* stream data from database via http response
* do both simultaneously without blocking the event loop to allow multiple concurrent connections
