import React, {Component} from 'react'
import {render} from 'react-dom'

function paintByNumbers(array, coord, replacement) {
    if (coord[0] > array.length - 1 || coord[1] > array[0].length - 1 || array[coord[0]][coord[1]] === replacement) return array
    let startNum = array[coord[0]][coord[1]],
        stack = [{x: coord[0], y: coord[1]}],
        left, right, x, y, xy
    while (stack.length > 0) {
        xy = stack.pop()
        x = xy.x, y = xy.y
        while (y-- >= 0 && array[x][y] === startNum) {
            continue
        }
        while (y++ < array.length -1 && array[x][y] === startNum) {
            array[x][y] = replacement
            left = false, right = false
            if (x > 0) {
                if (array[x-1][y] === startNum){
                    if (!left) {
                        stack.push({x: x - 1, y: y})
                        left = true
                    }
                } else if (left) {
                    left = false
                }
            }
            if (x < array[0].length - 1) {
                if (array[x+1][y] === startNum){
                    if (!right) {
                        stack.push({x: x + 1, y: y})
                        right = true
                    }
                } else if (right) {
                    right = false
                }
            }
        }
    }
    return array
}

class App extends Component {
  render() {
    return (
      <div>
        <Numbers />
      </div>
    )
  }
}

class Numbers extends Component {
  constructor() {
    super()
    let array = [['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b'],
                 ['a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a'], ['a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c'], ['c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b','c','a','a','a','b','c','a','a','b']],
        replacement = 'e'
    this.state = {array, replacement}
  }

  div(i, j) {
    let arr = this.state.array
    arr[i][j]
    paintByNumbers(arr,[i,j],this.state.replacement)
    this.setState({array: arr})
  }

  render() {
    return  <div>
              {this.state.array.map((ae,i) => {
                return <div style={{clear: "both", margin:0, padding:0}} >{ae.map((el,j) => {
                  return <div style={{float: "left", margin:0, padding:0}} key={i + "_" + j} onClick={() => this.div(i, j)}>{el}</div>
                })}</div>
              })}
            </div>
  }
}

render(<App />, document.querySelector('#root'))