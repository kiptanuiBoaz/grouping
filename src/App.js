
function App() {


  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  let noMembers;
  const chunkSize = data.length/noMembers;
  
  const Randomize = ()=>{
    const outputArray = [];
    const randomInt = Math.floor(Math.random() * data.length);

    let i;
    let a;
    for(a=0; a<noMembers; a++){
      console.log(chunkSize);
      for(i = 0; i < chunkSize; i++){
        outputArray.push(randomInt);
      }
    }
   
  }

  return (
    <div >
    
        <h1>Please input your required number per group:</h1>

        <label value={noMembers} >Number per group</label>

        <input type="number" name="numberPerGroup"  required/>


        <button onClick={Randomize }>Randomize</button>
        
        <div>

        </div>
    </div>
    
  );
}

export default App;
