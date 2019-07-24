async function await_example(){
  
  async function message () {
      return "Hi Peter"
   }

  let msg = await message();
  console.log("Msg:" + msg)
}

await_example();