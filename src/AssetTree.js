export const AssetTree = class {
    getValues() {
      return [
        {
          name: 'nature',
          caption: 'Contains a multiple nice picture about nature.', // TODO: not used right now!
          path: './img/root/',
          cover: 'cover.jpg',
          files: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
            '6.jpg',
            '7.jpg',
            '8.jpg',
            '9.jpg',
            '10.jpg',
          ]
        },
        {
          name: 'trees',
          caption: 'A collection of images around the topic of trees.', // TODO: not used right now!
          path: './img/root/',
          cover: 'cover.jpg',
          files: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg',
            '5.jpg',
          ]
        },
      ];
    }
};