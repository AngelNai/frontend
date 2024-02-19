import "./app.css"
const numerberButtonClasses='btn btn-info w-100'
const operatorButtonClasses='btn btn-warning w-100'
const specialButtonClasses='btn btn-danger w-100'

function App() {
  return (
    <div>
      <h1>calculator</h1>
      <table className="center">
        <tbody>
          <tr>
            <td className="text-end" colSpan={4}>
              <h2>0</h2>
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
              <button className={numerberButtonClasses}
              type="secondary">
7
              </button>
            </td>
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
8
              </button>
            </td>
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
9
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
              <button className={numerberButtonClasses}
              type="secondary">
6
              </button>
            </td>
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
5
              </button>
            </td>
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
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
              <button className={numerberButtonClasses}
              type="secondary">
3
              </button>
            </td>
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
2
              </button>
            </td>
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
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
            <button className={numerberButtonClasses}
            type="secondary">0</button>
            </td>
            
            <td className="text-center">
              <button className={numerberButtonClasses}
              type="secondary">
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
