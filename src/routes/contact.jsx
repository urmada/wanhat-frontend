import { Form } from 'react-router-dom'
export default function Contact() {
  const contact = {
    name: 'Your Name',
    avatar_urls: {'96': 'https://placekitten.com/g/96/96'},
    url: 'http://name.com',
    description: 'Some description',
    favorite: true,
  }
  return (
    <div id="contact" className="d-flex">
      <div className="pe-4">
        <img
          alt={`${contact?.name} of avatar`}
          className="rounded"
          height={96}
          src={contact?.avatar_urls['96'] || null}
          width={96}
        />
      </div>
      <div>
        <h1 className="d-flex display-6 my-0">
          {contact.name ? (
            <>
              {contact.name}
            </>
          ) : (
            <i>No Name</i>
          )}
        </h1>
        {contact.url && (
          <p className="fs-4 my-0">
            <a target="_blank" href={contact.url} rel="noreferrer">
              {contact.url}
            </a>
          </p>
        )}
        {contact.description && <p>{contact.description}</p>}
        <div className="d-flex">
          <Form action="edit">
            <button className="btn btn-outline-primary" type="submit">
              Edit
            </button>
          </Form>
          &nbsp;
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  'Please confirm you want to delete this record.'
                )
              ) {
                event.preventDefault()
              }
            }}
          >
            <button className="btn btn-outline-danger" type="submit">
              Delete
            </button>
          </Form>
        </div>
      </div>
    </div>
  )
}

