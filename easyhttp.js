// ES5 Object Oriented Library
// This is going to be painful

function easyHTTP() {
  this.http = new XMLHttpRequest();
}

/*
PROTOTYPE METHODS
*/

// GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};

// POST Request
this.easyHTTP.prototype.post = function (url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-Type", "application/json");

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// PUT Request
this.easyHTTP.prototype.put = function (url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-Type", "application/json");

  let self = this;

  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(data));
};

// DELETE Request
easyHTTP.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;

  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send();
};
