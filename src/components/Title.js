//Functional Component
//Dum Component
function Title(props) {
  const { text, name } = props;
  return (
    <h1>{text + name}</h1>
  )
}

export default Title;
