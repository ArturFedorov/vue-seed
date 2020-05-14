This component is a template for *'vuelidate-error-extractor'* plugin. It adds validation errors according to passed
validation object.

Text of validation errors comes from *'@/i18n.ts'*
___


#### Example of the component

```vue
  <template>
    <div style="max-width: 320px;">
        <formGroup
            :validator="$v.email"
            name="E-mail">

           <input
            type="text"
            name="email"
            id="email"
            class="form-input"
            :class="{'is-invalid': $v.email.invalid}"
            v-model.trim="email"
            @change="$v.email.$touch()">

        </formGroup>
    </div>
  </template>

  <script>
    import {required, email} from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                email: ''
            };
        },
        validations() {
            return {
                email: {
                    required,
                    email
                }
            };
        }
    }
  </script>
```
