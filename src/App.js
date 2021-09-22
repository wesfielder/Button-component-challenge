import "./App.css";
import Button from "./Button/Button";

function App() {
  return (
    <div className="app">
      <div className="title-div">Buttons</div>
      <div className="small-col-button-area">
        <div className="button-display">
          <span className="subtitle-div">&#60;Button /&#62;</span>
          <div>
            <Button />
          </div>
        </div>
        <div className="button-display">
          <span className="subtitle-div">&:hover, &:focus</span>
          <div>
            <Button className="default-color-hover-focus" />
          </div>
        </div>
      </div>

      <div className="small-col-button-area">
        <div className="button-display">
          <span className="subtitle-div">
            &#60;Button variant="outline" /&#62;
          </span>
          <div>
            <Button buttonType="outline" />
          </div>
        </div>
        <div className="button-display">
          <span className="subtitle-div">&:hover, &:focus</span>
          <div>
            <Button
              buttonType="outline"
              className="outline-button-hover-focus"
            />
          </div>
        </div>
      </div>

      <div className="small-col-button-area">
        <div className="button-display">
          <span className="subtitle-div">
            &#60;Button variant="text" /&#62;
          </span>
          <div>
            <Button buttonType="text" />
          </div>
        </div>
        <div className="button-display">
          <span className="subtitle-div">&:hover, &:focus</span>
          <div>
            <Button buttonType="text" className="text-button-hover-focus" />
          </div>
        </div>
      </div>

      <div className="small-col-button-area">
        <div className="button-display">
          <span className="subtitle-div">&#60;Button disableShadow /&#62;</span>
          <div>
            <Button boxShadow="disabled" className="box-shadow-example-color" />
          </div>
        </div>
      </div>

      <div className="small-col-button-area">
        <div className="button-display">
          <span className="subtitle-div">&#60;Button disabled /&#62;</span>
          <div>
            <Button disabled={true} />
          </div>
        </div>

        <div className="button-display">
          <span className="subtitle-div">
            &#60;Button variant="text" disabled /&#62;
          </span>
          <div>
            <Button buttonType="text" disabled />
          </div>
        </div>
      </div>

      <div className="medium-col-button-area">
        <div className="button-display">
          <span className="subtitle-div">
            &#60;Button startIcon="local_grocery_store" /&#62;
          </span>
          <div>
            <Button startIcon="local_grocery_store" color="primary" />
          </div>
        </div>

        <div className="button-display">
          <span className="subtitle-div">
            &#60;Button endIcon="local_grocery_store" /&#62;
          </span>
          <div>
            <Button endIcon="local_grocery_store" color="primary" />
          </div>
        </div>
      </div>

      <div className="large-col-button-area">
        <div className="large-button-display">
          <span className="subtitle-div">&#60;Button size="sm" /&#62;</span>
          <div>
            <Button size="sm" color="primary" />
          </div>
        </div>

        <div className="large-button-display">
          <span className="subtitle-div">&#60;Button size="md" /&#62;</span>
          <div>
            <Button size="md" color="primary" />
          </div>
        </div>

        <div className="large-button-display">
          <span className="subtitle-div">&#60;Button size="lg" /&#62;</span>
          <div>
            <Button size="lg" color="primary" />
          </div>
        </div>
      </div>

      <div className="large-col-button-area">
        <div className="large-button-display">
          <span className="subtitle-div">
            &#60;Button color="default" /&#62;
          </span>
          <div>
            <Button color="default" />
          </div>
        </div>

        <div className="large-button-display">
          <span className="subtitle-div">
            &#60;Button color="primary" /&#62;
          </span>
          <div>
            <Button color="primary" />
          </div>
        </div>

        <div className="large-button-display">
          <span className="subtitle-div">
            &#60;Button color="secondary"/&#62;
          </span>
          <div>
            <Button color="secondary" />
          </div>
        </div>

        <div className="large-button-display">
          <span className="subtitle-div">
            &#60;Button color="danger" /&#62;
          </span>
          <div>
            <Button color="danger" />
          </div>
        </div>
      </div>

      <div className="large-col-button-area">
        <div className="large-button-display">
          <span className="subtitle-div">&:hover, &:focus</span>
          <div>
            <Button color="default" className="default-color-hover-focus" />
          </div>
        </div>

        <div className="large-button-display">
          <div>
            <Button color="primary" className="primary-color-hover-focus" />
          </div>
        </div>

        <div className="large-button-display">
          <div>
            <Button color="secondary" className="secondary-color-hover-focus" />
          </div>
        </div>

        <div className="large-button-display">
          <div>
            <Button color="danger" className="danger-color-hover-focus" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
