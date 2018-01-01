export default ({ types }: { types: any }) => {
  return {
    visitor: {
      BinaryExpression(path: any) {
        if (path.node.operator !== '===') {
          return
        }
        path.node.left = types.identifier('aaa')
        path.node.right = types.identifier('bbb')
      }
    }
  }
}
