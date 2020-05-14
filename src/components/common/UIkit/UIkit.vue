<template><div></div></template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'UIkit'
});
</script>

<docs>
  Styleguide for HTML components:

  #### Headings

  ```jsx
  <h1>1st level Heading</h1>

  <h2>2nd level Heading</h2>

  <h3>3rd level Heading</h3>

  <h4>4th level Heading</h4>

  <h5>5th level Heading</h5>
  ```


  #### Text
  ```jsx
  <p>
    A paragraph of text: sample text. <a href="#">And a link in the text</a>. Lorem ipsum donec et urna sagittis
    congue non lectus curabitur integer — elementum: sit bibendum — auctor risus sodales leo tempus bibendum. Urna a
    et vulputate morbi orci, et vivamus pellentesque vivamus mattis ornare: eget arcu et massa. Non congue sodales
    maecenas ut urna congue: ultricies eget odio amet bibendum, ornare urna quisque at ornare amet ornare molestie,
    ligula elementum eros integer.
  </p>
  <p>
    <strong>bold text</strong>
    <br>
    <em>italic text</em>
  </p>
  ```

  #### Unordered list
  ```jsx
  <ul class="base-list">
    <li>Test unordered list of values</li>
    <li>Test unordered list of values</li>
    <li>Test unordered list of values</li>
  </ul>
  ```

  #### Ordered list
  ```jsx
  <ol>
    <li>Test ordered list of values</li>
    <li>Test ordered list of values</li>
    <li>Test ordered list of values</li>
  </ol>
  ```

  #### Form sample
  ```jsx
  <form style="max-width: 500px;">
    <div class="form-field">
      <label
        for="inp1"
        class="form-label">
        Text Input
      </label>
      <input
        type="text"
        name="inp1"
        id="inp1"
        class="form-input">
    </div>
    <div class="form-field">
      <label
        for="select1"
        class="form-label">
        Select
      </label>
      <select
        name="select1"
        id="select1"
        class="form-input">
        <option value="en" selected>en</option>
        <option value="de">de</option>
      </select>
    </div>
    <div class="form-field">
      <label
        for="textarea"
        class="form-label">
        Textarea
      </label>
      <textarea
        name="textarea"
        id="textarea"
        class="form-input form-textarea">
      </textarea>
    </div>
  </form>
  ```

  #### Buttons

  ```jsx
  <button
    type="button"
    name="primary-button"
    class="btn btn-basic btn-primary">
    Primary button
  </button>
  ```

  ```jsx
  <button
    type="button"
    name="disabled-primary-button"
    class="btn btn-basic btn-primary"
    disabled>
    Disabled primary button
  </button>
  ```

  ```jsx
  <button
    type="button"
    name="secondary-button"
    class="btn btn-basic btn-secondary">
    Secondary button
  </button>
  ```

  ```jsx
  <button
    type="button"
    name="disabled-secondary-button"
    class="btn btn-basic btn-secondary"
    disabled>
    Disabled secondary button
  </button>
  ```

  ```jsx
  <button
    type="button"
    name="simple-button"
    class="btn btn-basic btn-simple">
    Simple button
  </button>
  ```


  ```jsx
  <button
    type="button"
    name="disabled-simple-button"
    class="btn btn-basic btn-simple"
    disabled>
    Disabled simple button
  </button>
  ```
</docs>
