
import {Form, Avatar} from"./_components"
import {FormProvider} from "./_hooks/useFormContext"



const App=()=> {
  
  return (
    <main >
      <FormProvider>
        <Form />
        <Avatar />
      </FormProvider>
    </main>
  );
}

export default App;
