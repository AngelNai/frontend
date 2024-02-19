import "./app.css"
const numberButtonClasses='btn btn-outline-primary w-100'
const green='btn btn-outline-success w-100'
const yellow='btn btn-outline-warning w-100'
const gray='btn btn-outline-secondary w-100'
const operatorButtonClasses='btn btn-warning w-100'
const specialButtonClasses='btn btn-danger w-100'
function App() {
  

  return (
    <div>
    <h1 className="text-center">calculator</h1>
    <table className="center">
      <tbody>
        <tr>
          <td className="text-end" colSpan={4}>
            <h2 class="text-bg-info p-3">0</h2>
          </td>
          </tr>
        <tr>
          <td className="text-center">
            <button className={specialButtonClasses}
            type='button'>C</button>
          </td>
          <td className="text-center">
            <button className={specialButtonClasses}
            type="button">{'<'}</button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button">%</button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button">/</button>
          </td>
        </tr>
        <tr>
        <td className="text-center">
            <button className={ green}
            type="primary">
9
            </button>
          </td>
          <td className="text-center">
            <button className={ green}
            type="primary">
8
            </button>
          </td>
          <td className="text-center">
            <button className={ green}
            type="primary">
7
            </button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button">
X
            </button>
          </td>
        </tr>
        <tr>
        <td className="text-center">
            <button className={ yellow}
            type="primary">
6
            </button>
          </td>
          <td className="text-center">
            <button className={ yellow}
            type="primary">
5
            </button>
          </td>
          <td className="text-center">
            <button className={ yellow}
            type="primary">
4
            </button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button">
-
            </button>
          </td>
        </tr>
        <tr>
        <td className="text-center">
            <button className={ numberButtonClasses}
            type="primary">
3
            </button>
          </td>
          <td className="text-center">
            <button className={ numberButtonClasses}
            type="primary">
2
            </button>
          </td>
          <td className="text-center">
            <button className={ numberButtonClasses}
            type="primary">
1
            </button>
          </td>
          <td className="text-center">
            <button className={operatorButtonClasses}
            type="button">
+
            </button>
          </td>
        </tr>
        <tr>
          <td className="text-center" colSpan={2}>
          <button className={ gray}
          type="primary">0</button>
          </td>
          
          <td className="text-center">
            <button className={ gray}
            type="primary">
.
            </button>
          </td>
          <td className="text-center">
            <button className={specialButtonClasses}
            type="button">
=
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   
  )
}

export default App