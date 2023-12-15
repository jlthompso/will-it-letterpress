import { fonts, font, createFont, updateFont, deleteFont } from './fonts'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('fonts', () => {
  scenario('returns all fonts', async (scenario) => {
    const result = await fonts()

    expect(result.length).toEqual(Object.keys(scenario.font).length)
  })

  scenario('returns a single font', async (scenario) => {
    const result = await font({ id: scenario.font.one.id })

    expect(result).toEqual(scenario.font.one)
  })

  scenario('creates a font', async () => {
    const result = await createFont({
      input: { name: 'String' },
    })

    expect(result.name).toEqual('String')
  })

  scenario('updates a font', async (scenario) => {
    const original = await font({ id: scenario.font.one.id })
    const result = await updateFont({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a font', async (scenario) => {
    const original = await deleteFont({ id: scenario.font.one.id })
    const result = await font({ id: original.id })

    expect(result).toEqual(null)
  })
})
