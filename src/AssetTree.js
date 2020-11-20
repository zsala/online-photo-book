export let AssetTree = class {
    constructor(root) {
      this.root = root;
    }

    getValues() {
      return [
        {
          name: '',
          path: 'img',
          files: [
            {
              name: '1.jpg',
              url: './img/medium/1.jpg"'
            },
            {
              name: '1.jpg',
              url: './img/medium/2.jpg"'
            },
            {
              name: '1.jpg',
              url: './img/medium/3.jpg"'
            },
          ]
        },
      ];
    }
};