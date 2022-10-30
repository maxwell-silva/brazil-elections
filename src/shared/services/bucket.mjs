const Bucket = function () {
  this.provider = "";
};

Bucket.prototype = {
  setStrategy: function (provider) {
    this.provider = provider;
  },

  checkExistence: function (path, file) {
    return this.provider.checkExistence(path, file);
  },
  save: function (path, file) {
    return this.provider.save(path, file);
  },
  archive: function (path, file) {
    return this.provider.archive(path, file);
  },

  delete: function (path, file) {
    return this.provider.delete(path, file);
  },
};

const local = function () {
  this.checkExistence = async function (path, file) {
    // calculations...
    return `local:${path}/${file}`;
  };
  this.save = async function (path, file) {
    // calculations...
    return `local:${path}/${file}`;
  };
  this.archive = async function (path, file) {
    // calculations...
    return `local:${path}/${file}`;
  };
  this.delete = async function (path, file) {
    // calculations...
    return `local:${path}/${file}`;
  };
};

const s3 = function () {
  this.checkExistence = async function (path, file) {
    // calculations...
    return `S3:${path}/${file}`;
  };
  this.save = async function (path, file) {
    // calculations...
    return `S3:${path}/${file}`;
  };
  this.archive = async function (path, file) {
    // calculations...
    return `S3:${path}/${file}`;
  };
  this.delete = async function (path, file) {
    // calculations...
    return `S3:${path}/${file}`;
  };
};

export default Bucket;
export { local, s3 };

// function run() {
//   const local = new LOCAL();
//   const s3 = new S3();

//   const bucket = new Bucket();

//   bucket.setStrategy(local);
//   console.log(bucket.archive("pasta", "file1"));
//   bucket.setStrategy(s3);
//   console.log(bucket.archive("pasta", "file1"));
// }

// run();
