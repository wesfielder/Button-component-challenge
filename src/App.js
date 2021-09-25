import "./App.css";
import Button from "./Button/Button";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <div className="logo">
          {" "}
          <span className="red-logo">Dev</span>challenges.io{" "}
        </div>
        <div className="nav-area">
          <ul className="nav-list">
            <li className="nav-item">Colors</li>
            <li className="nav-item">Typography</li>
            <li className="nav-item">Spaces</li>
            <li className="nav-item">Buttons</li>
            <li className="nav-item selected-nav-item">Inputs</li>
            <li className="nav-item">Grid</li>
          </ul>
        </div>
      </div>
      <div className="demo-area">
        <div className="title">Buttons</div>
        <div className="small-col-button-area">
          <div className="button-display">
            <span className="subtitle-dark">&#60;Button /&#62;</span>
            <div>
              <Button />
            </div>
          </div>
          <div className="button-display">
            <span className="subtitle-light">&:hover, &:focus</span>
            <div>
              <Button className="default-color-hover-focus" />
            </div>
          </div>
        </div>

        <div className="small-col-button-area">
          <div className="button-display">
            <span className="subtitle-dark">
              &#60;Button variant="outline" /&#62;
            </span>
            <div>
              <Button buttonType="outline" />
            </div>
          </div>
          <div className="button-display">
            <span className="subtitle-light">&:hover, &:focus</span>
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
            <span className="subtitle-dark">
              &#60;Button variant="text" /&#62;
            </span>
            <div>
              <Button buttonType="text" />
            </div>
          </div>
          <div className="button-display">
            <span className="subtitle-light">&:hover, &:focus</span>
            <div>
              <Button buttonType="text" className="text-button-hover-focus" />
            </div>
          </div>
        </div>

        <div className="small-col-button-area">
          <div className="button-display">
            <span className="subtitle-dark">
              &#60;Button disableShadow /&#62;
            </span>
            <div>
              <Button
                boxShadow="disabled"
                className="box-shadow-example-color"
              />
            </div>
          </div>
        </div>

        <div className="small-col-button-area">
          <div className="button-display">
            <span className="subtitle-dark">&#60;Button disabled /&#62;</span>
            <div>
              <Button disabled={true} text="Disabled" />
            </div>
          </div>

          <div className="button-display">
            <span className="subtitle-dark">
              &#60;Button variant="text" disabled /&#62;
            </span>
            <div>
              <Button buttonType="text" text="Disabled" disabled />
            </div>
          </div>
        </div>

        <div className="medium-col-button-area">
          <div className="button-display">
            <span className="subtitle-dark">
              &#60;Button startIcon="local_grocery_store" /&#62;
            </span>
            <div>
              <Button startIcon="local_grocery_store" color="primary" />
            </div>
          </div>

          <div className="button-display">
            <span className="subtitle-dark">
              &#60;Button endIcon="local_grocery_store" /&#62;
            </span>
            <div>
              <Button endIcon="local_grocery_store" color="primary" />
            </div>
          </div>
        </div>

        <div className="large-col-button-area">
          <div className="size-button-display">
            <span className="subtitle-dark">&#60;Button size="sm" /&#62;</span>
            <div>
              <Button size="sm" color="primary" />
            </div>
          </div>

          <div className="large-button-display">
            <span className="subtitle-dark">&#60;Button size="md" /&#62;</span>
            <div>
              <Button size="md" color="primary" />
            </div>
          </div>

          <div className="large-button-display">
            <span className="subtitle-dark">&#60;Button size="lg" /&#62;</span>
            <div>
              <Button size="lg" color="primary" />
            </div>
          </div>
        </div>

        <div className="large-col-button-area">
          <div className="large-button-display">
            <span className="subtitle-dark">
              &#60;Button color="default" /&#62;
            </span>
            <div>
              <Button color="default" />
            </div>
          </div>

          <div className="large-button-display">
            <span className="subtitle-dark">
              &#60;Button color="primary" /&#62;
            </span>
            <div>
              <Button color="primary" />
            </div>
          </div>

          <div className="large-button-display">
            <span className="subtitle-dark">
              &#60;Button color="secondary"/&#62;
            </span>
            <div>
              <Button color="secondary" text="Secondary" />
            </div>
          </div>

          <div className="large-button-display">
            <span className="subtitle-dark">
              &#60;Button color="danger" /&#62;
            </span>
            <div>
              <Button color="danger" text="Danger" />
            </div>
          </div>
        </div>

        <div className="large-col-button-area">
          <div className="large-button-display">
            <span className="subtitle-light">&:hover, &:focus</span>
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
              <Button
                color="secondary"
                text="Secondary"
                className="secondary-color-hover-focus"
              />
            </div>
          </div>

          <div className="large-button-display">
            <div>
              <Button
                color="danger"
                text="Danger"
                className="danger-color-hover-focus"
              />
            </div>
          </div>
        </div>
        <div className="icons-link">
          Icons: https://material.io/resources/icons/?style=round
        </div>
        <div className="footer">
          created by{" "}
          <a href="https://devchallenges.io/portfolio/wesfielder">wesfielder</a>{" "}
          - devChallenges.io
        </div>
      </div>
    </div>
  );
}

export default App;
