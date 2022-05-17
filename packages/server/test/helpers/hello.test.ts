import world from '#src/helpers/hello'

test('test hello world', () => {
  expect(world()).toBe('Hello World!')
})
