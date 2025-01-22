const directions = [
  [-1, -1], [-1, 0], [-1, 1],
  [ 0, -1],          [ 0, 1],
  [ 1, -1], [ 1, 0], [ 1, 1]
]

const updateToNumber = (row, col, size, grid) => {
  // While not all mines are placed, just mark number cells with 'n'
  directions.forEach(([dx, dy]) => {
    const newRow = row + dx
    const newCol = col + dy
    if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
      if (grid[newRow][newCol] === " ") {
        grid[newRow][newCol] = "n"
      }
    }
  })
}

const countMinesAround = (row, col, size, grid) => {
  let count = 0

  // Count all mines around cell
  directions.forEach(([dx, dy]) => {
    const newRow = row + dx
    const newCol = col + dy
    if (newRow >= 0 && newRow < size && newCol >= 0 && newCol < size) {
      if (grid[newRow][newCol] === "@") {
        count++
      }
    }
  })
  return count
}

const generateMinesweeperGrid = size => {
  // Init grid
  const grid = Array.from({ length: size }, () => Array(size).fill(" "))

  const rows = [...Array(size).keys()]
  rows.sort(() => Math.random() - 0.5)

  // Place one mine on each row
  rows.forEach(row => {
    const candidates = []
    for (let col = 0; col < size; col++) {
      if (grid[row][col] === " " || grid[row][col] === "n") {
        candidates.push(col)
      }
    }
    if (candidates.length > 0) {
      const col = candidates[Math.floor(Math.random() * candidates.length)]
      grid[row][col] = "@"
      updateToNumber(row, col, size, grid)
    }
  })

  // Keep placing mines while zero cell count (no mine and no number) is more than 15
  // Change 15  to other number to adjust difficulty
  while (grid.flat().filter(cell => cell === " ").length > 15) {
    const nonMineCells = []
    grid.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell === " " || cell === "n") {
          nonMineCells.push([rowIndex, colIndex])
        }
      })
    })
    const [row, col] = nonMineCells[Math.floor(Math.random() * nonMineCells.length)]
    grid[row][col] = "@"
    updateToNumber(row, col, size, grid)
  }

  // Replace 'n' by number of mines around
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (grid[row][col] === "n") {
        grid[row][col] = countMinesAround(row, col, size, grid)
      }
    }
  }

  // Wrap into spoiler and code tags
  return grid.map(row => ("||`" + row.join("`||||`") + "`||")).join("\n")
}

console.log(generateMinesweeperGrid(9))
