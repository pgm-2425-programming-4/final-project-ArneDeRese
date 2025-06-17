import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/post/$post')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>

  <form action="" method="post">
    <div>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
    </div>

    <div>
      <label htmlFor="content">Content</label>
      <textarea id="content" name="content"></textarea>
    </div>

    <button type="submit">Submit</button>

  </form>

  </div>
}
