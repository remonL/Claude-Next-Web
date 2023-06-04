interface Plugin {
  key: string;
  reqHook?: (message: string) => string;
  resHook?: (message: string) => any;
  /** cuntom render of resHook */
  renderType?: "image" | "markdown" | any;
}

class ChatPlugin {
  constructor(list: any[]) {
    list.map((item) => {
      this.register(item);
    });
  }

  register(plugin) {
    this.pluginMap[plugin] = plugin;
  }

  call(message) {
    /** if match plugin  */
  }
}

export default Plugin;
