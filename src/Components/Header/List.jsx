import propTypes from 'prop-types'

function List({listitems, className}) {
  return (
    <>
        <li className={`opacity-30 p-5 ${className} hover:underline`} >{listitems}</li>
    </>
  )
}

List.propTypes = {
    listitems:propTypes.any,
    className:propTypes.string
}
export default List
