/*Task: сделайте простой сценарий на javascript,
  который по входящему звонку просит звонящего ввести с клавиатуры телефона два числа,
    а затем произносит сумму введенных чисел*/


VoxEngine.addEventListener(AppEvents.CallAlerting, e => {
  const call_customer = e.call;
  let result = 0;
  let arr_nums = [];
  // answer the customer
  call_customer.answer();
  call_customer.handleTones(true);
  // say hello to customer when connected
  call_customer.addEventListener(CallEvents.Connected, e => {
    call_customer.say(`hello, my name is Alex. Please, enter a number!`, Language.US_ENGLISH_FEMALE);
    call_customer.addEventListener(CallEvents.ToneReceived, e => {
                                          //EROR
                                          arr_nums.push(call_customer.customData());
                                          //не происходит передача данных от пользователя в e.call.customData().
                                          //Вопрос: а должна ли происходить через этот метод? Если да, то как.
                                          //Если нет, то как передать данные переменной то, что ввел пользователь?
                                          //Вопрос2: как дебажить код в этой среде? пробовал через Отладку, не сообразил в чем соль.. логи помогали отчасти
                                          //так может и разобрался бы "методом тыка" через консоль)
      									  //остальное должно работать: робот общается, логи в норме, код проверял в Node
      call_customer.say(`All right! Please, enter a number again`, Language.US_ENGLISH_FEMALE);
      call_customer.addEventListener(CallEvents.ToneReceived, e => {
                                          //EROR
                                          arr_nums.push(call_customer.customData());
                                          //
        for (let i = 0; i < arr_nums.length; i++) {
          arr_nums[i] = +arr_nums[i]
        }
        result = arr_nums.reduce((sum, item) => sum + item, 0);
        let x = true;
        if (x) {
          call_customer.say(result.toString(10), Language.US_ENGLISH_FEMALE)
        }
      });
    });
  });
  call_customer.addEventListener(CallEvents.Failed, e => {
    VoxEngine.terminate();
  });
  call_customer.addEventListener(CallEvents.Disconnected, e => {
    VoxEngine.terminate()
  });
});
