
import MaterialEditorForm from './components/MaterialEditorForm/MaterialEditorForm';
import MaterialsList from './components/MaterialsList/MaterialsList';
import { useGetMaterialsQuery, useUpdateMaterialMutation, useAddMaterialMutation, useDeleteMaterialMutation } from './redux/materialsSlice';

const App = () => {

  const { data: materials, isFetching, isError } = useGetMaterialsQuery();
  const [ addMaterial ] = useAddMaterialMutation();
  const [ deleteMaterial ] = useDeleteMaterialMutation();
  const [ updateMaterial ] = useUpdateMaterialMutation();
    return (
      <div>
        <MaterialEditorForm   
        onSubmit={addMaterial}
        />
        {isError && <p>Ooops, something gone wrong...</p>}
        {isFetching ? 
          <div>LOADING...</div> 
          : <MaterialsList 
            onDelete={deleteMaterial}
            onUpdate={updateMaterial}
            items={materials}
          />
        }
      </div>
    );
}

export default App;




















//CLASS COMPONENT METHODS

// state = {
  //   materials: [],
  //   isLoading: false,
  //   error: null
  // }

  // async componentDidMount() {
  //   try {
  //     this.setState({ isLoading: true })
  //       const materials = await API.getMaterials();
  //         this.setState({ materials, isLoading: false })
  //   } catch (error) {
  //     this.setState({ error: true, isLoading: false })
  //     console.log(error);
  //   }
  // }

  // addMaterial = async ( values ) => {
  //   try {
  //       const material = await API.addMaterial(values);
  //         this.setState(state => (
  //           { 
  //             materials: [...state.materials, material],
  //           }))
  //   } catch (error) {
  //     this.setState({ error: true})
  //     console.log(error);
  //   }
  // }

  // deleteMaterial = async(id) => {
  //   try {
  //     await API.deleteMaterials(id);
  //     this.setState(state => ({ materials: state.materials.filter(item => item.id !== id) }));
  //   } catch (error) {
  //     this.setState({ error: true })
  //     console.log(error);
  //   }
  // }

  // updateMaterials = async ( fields ) => {
  //   try {
  //     const materialUpdated = await API.updateMaterials(fields);
  //     this.setState(state => ({ 
  //       materials: state.materials.map(material => material.id === fields.id ?
  //         materialUpdated : material
  //       )
  //     }))
  //   } catch (error) {
  //     this.setState({ error: true })
  //     console.log(error);
  //   }
  // }
