import world from '#src/helpers/hello'

test('test hello world', () => {
  expect(world()).toContain('Hello World!')
})
