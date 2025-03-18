// fetch("https://api.example.com/data") // Отримання даних
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("https://api.example.com/data", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ key: "value" }), // Відправляємо дані у форматі JSON
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("Yes");
//     } else {
//       reject("No");
//     }
//   }, 2000);
// });

// newPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Finished!!!"));

// const randomPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 1) {
//       resolve("first");
//     } else {
//       reject("second");
//     }
//   }, 2000);
// });

// randomPromise
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Hello everyone!!"));

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolve("Yes ✅");
//     } else {
//       reject("No ❌");
//     }
//   }, 2000);
// });

// newPromise
//   .then((result) => {
//     return console.log(result);
//   })
//   .catch((error) => {
//     return console.log(error);
//   })
//   .finally(() => console.log("Finally!"));

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = Math.random() > 0.3;
//       success
//         ? resolve("📦 Дані отримані!")
//         : reject("⚠️ Дані не завантажені!");
//     }, 1500);
//   });
// }

// async function getData() {
//   try {
//     let data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Finally!");
//   }
// }
// getData();

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let success = Math.random() > 0.5;
//       success ? resolve("Yes") : reject("No");
//     }, 1500);
//   });
// }

// async function getData() {
//   try {
//     let data = await fetchData();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("finally!");
//   }
// }
// getData();

// function firstTask() {
//   return new Promise((resolve) => {
//     setTimeout(
//       () => resolve("✅ Перше завдання виконано"),
//       Math.random() * 2000
//     );
//   });
// }

// function secondTask() {
//   return new Promise((resolve) => {
//     setTimeout(
//       () => resolve("✅ Друге завдання виконано"),
//       Math.random() * 2000
//     );
//   });
// }

// function thirdTask() {
//   return new Promise((resolve) => {
//     setTimeout(
//       () => resolve("✅ Третє завдання виконано"),
//       Math.random() * 2000
//     );
//   });
// }

// firstTask()
//   .then((result) => {
//     console.log(result);
//     return secondTask();
//   })
//   .then((result) => {
//     console.log(result);
//     return thirdTask();
//   })
//   .then((result) => console.log(result));
// //  Викликати ці функції ПОСЛІДОВНО (спочатку перше, потім друге, потім третє)

// async function runTasks() {
//   console.log(await firstTask());
//   console.log(await secondTask());
//   console.log(await thirdTask());
// }

// runTasks();

// function delay(ms) {
//   // TODO: Реалізуй функцію, щоб вона повертала Promise, який виконується через ms мс
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve();
//     }, ms);
//   });
// }

// // Перевірка:
// async function run() {
//   console.log("Чекаємо 1 секунду...");
//   await delay(1000);
//   console.log("⏳ Пройшла 1 секунда!");

//   console.log("Чекаємо 2 секунди...");
//   await delay(2000);
//   console.log("⏳ Пройшло 2 секунди!");
// }

// run();

// const p1 = new Promise((resolve) => {
//   setTimeout(() => resolve(1), 3000);
// });

// const p2 = new Promise((reject) => {
//   setTimeout(() => reject(2), 2000);
// });

// Promise.race([p1, p2])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 2000);
// });

// console.log(promise);

// const promise = new Promise((resolove, reject) => {
//   setTimeout(() => {
//     if (Math.random() > 0.5) {
//       resolove("First");
//     } else {
//       reject("Second");
//     }
//   }, 1000);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Операція завершена");
//   });

// const num = 10;

// function doubleNumber(n) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(n * 2);
//     }, 1000);
//   });
// }

// doubleNumber(num)
//   .then((result) => {
//     console.log(result);
//     return doubleNumber(result);
//   })
//   .then((result) => {
//     console.log(result);
//     return doubleNumber(result);
//   })
//   .then((result) => {
//     console.log(result);
//     console.log("Фінальний результат:", result);
//   });

// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("1");
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("2");
//       resolve();
//     }, 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("3");
//       resolve();
//     }, 1000);
//   });
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(() => console.log("✅ Всі кроки виконано!"));

// const success = true;

// function orderPizza() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve("🍕 Піца готова!");
//       } else {
//         reject("❌ Помилка: закінчились інгредієнти!");
//       }
//     }, 3000);
//   });
// }

// async function fetchData() {
//   try {
//     let response = await new Promise((resolve, reject) =>
//       setTimeout(() => reject("❌ Сталася помилка!"), 2000)
//     );
//     console.log(response);
//   } catch (error) {
//     console.log("Помилка:", error);
//   }
// }

// fetchData();

// orderPizza()
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("⏳ Час очікування завершено.");
//   });

// async function example() {
//   console.log("⏳ Чекаємо...");
//   let result = await new Promise((resolve) =>
//     setTimeout(() => resolve("✅ Завершено!"), 3000)
//   );
//   console.log(result);
// }

// example();

// function fryEggs() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🍳 Яєчня готова!");
//     }, 2000);
//   });
// }

// function orderCoffee() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("☕ Кава готова!");
//     }, 6000);
//   });
// }

// function toastBread() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🍞 Тост готовый!");
//     }, 1000);
//   });
// }

// async function cookBreakfast() {
//   try {
//     console.log("⏳ Готуємо сніданок...");

//     let [eggs, coffee, toast] = await Promise.all([
//       fryEggs(),
//       orderCoffee(),
//       toastBread(),
//     ]);

//     console.log(eggs);
//     console.log(coffee);
//     console.log(toast);

//     console.log("✅ Сніданок готовий!");
//   } catch (error) {
//     console.log("❌ Помилка:", error);
// }
// try {
//   console.log("⏳ Готуємо сніданок...");

//   let eggs = await fryEggs();
//   console.log(eggs);

//   let coffee = await orderCoffee();
//   console.log(coffee);

//   let toast = await toastBread();
//   console.log(toast);

//   console.log("✅ Сніданок готовий!");
// } catch (error) {
//   console.log("❌ Помилка:", error);
// }
// }

// cookBreakfast();

// function orderCoffee() {
//   return new Promise((resolve) => {
//     resolve("☕ Кава готова!");
//   });
// }

// function makeToast() {
//   return new Promise((resolve) => {
//     resolve("🍞 Тост готовый!");
//   });
// }

// function fryEggs() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🍳 Яєчня готова!");
//     }, 6000);
//   });
// }

// function pourJuice() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🧃 Сік готовий!");
//     }, 4000);
//   });
// }

// async function makeBreakfast() {
//   try {
//     const [coffee, tost] = await Promise.all([orderCoffee(), makeToast()]);

//     console.log(coffee);
//     console.log(tost);

//     let juice = await pourJuice();
//     console.log(juice);

//     let eggs = await fryEggs();
//     console.log(eggs);
//     console.log("✅ Сніданок подано!");
//   } catch (error) {
//     console.log("помилка:", error);
//   }
// }

// makeBreakfast();

// function checkAvailability(hotel) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("we have free apartments");
//       } else {
//         reject("We don't have free apartments");
//       }
//     }, 3000);
//   });
// }

// function processPayment() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Платіж успішно прийнятий!!!");
//     }, 2000);
//   });
// }

// function confirmBooking() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.1) {
//         resolve("Платіж підтверджено!");
//       } else {
//         reject("Платіж не вдалий!");
//       }
//     }, 1000);
//   });
// }

// async function bookHotel(hotel) {
//   try {
//     console.log("⏳ Перевіряємо наявність номерів...");
//     let availability = await checkAvailability();
//     console.log(`${hotel}: ${availability}`);

//     let payment = await processPayment();
//     console.log(payment);

//     let confirm = await confirmBooking();
//     console.log(confirm);
//   } catch (error) {
//     console.log(error);
//   } finally {
//     console.log("Дякуємо за звернення до нашого сурвісу!");
//   }
// }

// bookHotel("Grand Hotel");

// function requestTaxi() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.2) {
//         resolve("🚖 Таксі знайдено!");
//       } else {
//         reject("❌ Немає доступних таксі!");
//       }
//     }, 2000);
//   });
// }

// function processPayment() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.2) {
//         resolve("💳 Платіж успішний!");
//       } else {
//         reject("❌ Помилка платежу!");
//       }
//     }, 1500);
//   });
// }

// function startRide() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("🚕 Машина прибула! Ви в дорозі...");
//     }, 3000);
//   });
// }

// function completeRide() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       if (Math.random() > 0.8) {
//         resolve("🏁 Ви прибули на місце!");
//       } else {
//         reject("Ви не туди приїхали!))))))))))");
//       }
//     }, 10000);
//   });
// }

// // Ланцюжок промісів
// requestTaxi()
//   .then((message) => {
//     console.log(message);
//     return processPayment();
//   })
//   .then((message) => {
//     console.log(message);
//     return startRide();
//   })
//   .then((message) => {
//     console.log(message);
//     return completeRide();
//   })
//   .then((message) => {
//     console.log(message);
//     console.log("✅ Поїздка завершена!");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const promise1 = new Promise((resolve) =>
//   setTimeout(resolve, 2000, "Проміс 1 завершено")
// );
// const promise2 = new Promise((resolve) =>
//   setTimeout(resolve, 1000, "Проміс 2 завершено")
// );
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(reject, 3000, "Проміс 3 відхилено")
// );

// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // Виведе: "Проміс 2 завершено"
//   })
//   .catch((error) => {
//     console.log(error); // Якщо перший проміс відхиляється
//   });

function restaurant1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Замовлення готове, ресторан-1");
      } else {
        reject("Відхилено 1");
      }
    }, 3000);
  });
}

function restaurant2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        resolve("Замовлення готове, ресторан-2");
      } else {
        reject("Відхилено 2");
      }
    }, 5000);
  });
}

function restaurant3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.9) {
        resolve("Замовлення готове, ресторан-3");
      } else {
        setTimeout(() => {
          reject("Відхилено 3");
        }, 4000);
      }
    }, 2000);
  });
}

async function chooseFastestRestaurant() {
  try {
    console.log("⏳ Готуємо замовлення...");

    let rest = await Promise.race([
      restaurant1(),
      restaurant2(),
      restaurant3(),
    ]);

    console.log(rest);
  } catch (error) {
    console.log("❌ Помилка:", error);
  }
}

chooseFastestRestaurant();
