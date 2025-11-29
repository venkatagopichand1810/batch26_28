

function App(){

  let mobiles = ["lg", "oppo", "vivo"];

  // copy
  let copyMobile = [...mobiles];
  copyMobile.push("iphone")
  copyMobile.pop();
    copyMobile.pop();

  return (
    <>
      {mobiles.join("  ** ")} <br/>
      {copyMobile.join(" ** ")}

    </>
  )

}

export default App