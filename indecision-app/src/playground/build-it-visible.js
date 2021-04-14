const message = {
  body: 'Hello there!!! Now you see me!',
  show: false
}

const showMessage = () => {
  message.show = !message.show;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={ showMessage }>
        { message.show ? 'Hide details' : 'Show details' }
      </button>
      {
        message.show && (
          <div>
            <p>{ message.body }</p>
          </div>
        )
      }
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();
