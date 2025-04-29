import { render } from "@testing-library/react"
import { GifItem } from "../../src/Components/GifItem"

describe("Prueba en <GifItem />", () => {
  test("debe hacer match con el snapshot", () => {
    render(<GifItem />)
  })
})
