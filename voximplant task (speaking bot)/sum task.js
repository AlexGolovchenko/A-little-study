/*Task: make a simple script in JS (ES5-6) which ask caller enter two number and then say their sum*/

VoxEngine.addEventListener(AppEvents.CallAlerting, e => {
  const call_customer = e.call;
  // answer the customer
  call_customer.answer();
  //let customer to enter tone
  call_customer.handleTones(true);
  //execute function when connected
  call_customer.addEventListener(CallEvents.Connected, e => {
    //say hi and task to customer
    call_customer.say(`hello, my name is Alex. Please, enter a number!`, Language.US_ENGLISH_FEMALE);
    call_customer.addEventListener(CallEvents.PlaybackFinished, e => {
      call_customer.addEventListener(CallEvents.ToneReceived, e => {
        //get first value
        let first = Number(e.tone);
        //say next task to customer
        call_customer.say(`All right! Please, enter a number again`, Language.US_ENGLISH_FEMALE);
        call_customer.addEventListener(CallEvents.PlaybackFinished, e => {
          call_customer.addEventListener(CallEvents.ToneReceived, e => {
            //get second value
            let second = Number(e.tone);
            //switch true if ready to tell
            let x = true;
            if (x) {
              //say sum values to customer
              call_customer.say((first + second).toString(), Language.US_ENGLISH_FEMALE)
            }
          });
        });
      });
    });
  });
  //execute function when failed
  call_customer.addEventListener(CallEvents.Failed, e => {
    VoxEngine.terminate();
  });
  //execute function when disconnected
  call_customer.addEventListener(CallEvents.Disconnected, e => {
    VoxEngine.terminate();
  });
});
