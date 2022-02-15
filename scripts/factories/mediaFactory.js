class mediaFactory {
  constructor(data, type) {
    if (type == "image") {
      return new images(data);
    } else if (type == "video") {
      return new videos(data);
    } else {
      throw "Unknown type format";
    }
  }
}
