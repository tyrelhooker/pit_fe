
const Pencil = ({ searchResult }) => {
  return (
    <>
      <table>
        <tbody>
          {searchResult === undefined
            ? <tr>
                <td>None: Search for a pencil company name</td>
              </tr>
            : searchResult.map(val => 
                <tr>
                  <td> {val.company}</td>
                </tr>
              )
          }
        </tbody>
      </table>
    </>
  )
}

export default Pencil;