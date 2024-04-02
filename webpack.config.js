module.exports = {
  module: {
    rules: [
      // Інші правила...
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192, // Якщо розмір файлу менше 8KB, то він буде вбудований у базовий 64-бітний URL
              fallback: "file-loader", // Якщо файл більший, то буде використаний file-loader
              name: "[name].[ext]", // Ім'я вихідного файлу
              outputPath: "images/", // Шлях для виведення зображень
            },
          },
        ],
      },
    ],
  },
};
