import lscache from "lscache";

if (process.env.NODE_ENV !== "production") {
  lscache.enableWarnings(true);
}

const storage: any = {};

const lsCache = (action: string, key?: string, data?: string) => {
  if (lscache.supported()) {
    return lscache[action](key, data);
  } else {
    console.log("Local Storage is not supported");
  }
};

storage.set = (key, data) => lsCache("set", key, data);

storage.get = (key) => lsCache("get", key);

storage.remove = (key) => lsCache("remove", key);

storage.flush = () => lsCache("flush");

export default storage;
