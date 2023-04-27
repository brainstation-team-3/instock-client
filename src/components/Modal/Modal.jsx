import { createPortal } from 'react-dom'
import { deleteWarehouse, deleteInventoryItem } from '@utils/helpers.js'
import closeIcon from '@assets/icons/close-24px.svg'

const Modal = ({ type, id, name, open, onClose, setCurrentList }) => {
  if (!open) return null

  if (open) document.body.style.overflowY = 'hidden'

  const deleteHandler = async () => {

    type === 'warehouse'
      ? await deleteWarehouse(id)
      : await deleteInventoryItem(id)

    setCurrentList((prevState) => prevState.filter((item) => item.id !== id))
    onClose()
  }

  return createPortal(
    <div key={id}
         className='fixed top-0 right-0 bottom-0 left-0 h-screen items-center justify-center bg-black/40 z-[1000] md:flex'>
      <div className='top-0 right-0 bottom-0 left-0 mx-auto flex h-screen max-w-3xl flex-col gap-8 bg-white px-4 pt-20 pb-8
                      drop-shadow-xl md:relative md:h-fit md:rounded-md md:px-12 md:pt-12'>
        <h3 className='capitalize page-header'>
          delete {name} {type === 'warehouse' ? 'warehouse' : 'inventory item'}?
        </h3>
        <p className='flex-grow text-instock-black md:grow-0'>
          {`Please confirm that you’d like to delete the ${name} 
            ${type === 'warehouse' ? 'warehouse from the list of warehouses' : 'from the inventory list'}. 
            You won’t be able to undo this action.`}
        </p>
        <div className='flex items-end justify-end gap-4'>
          <button type='reset'
                  onClick={onClose}
                  className='label-btn w-1/2 border rounded-full text-instock-cloud capitalize hover:border-instock-indigo
                             py-2 hover:text-instock-indigo md:w-28 md:px-4 duration-300 ease-in-out'>
            cancel
          </button>
          <button type='submit'
                  onClick={deleteHandler}
                  className='label-btn w-1/2 py-2 rounded-full bg-instock-red capitalize text-instock-white
                             hover:bg-instock-black md:w-28 md:px-4 duration-300 ease-in-out'>
            delete
          </button>
        </div>
        <img className='absolute top-5 right-5 h-6 w-6 cursor-pointer'
             onClick={onClose}
             src={closeIcon}
             alt='close-icon' />
      </div>
    </div>,
    document.getElementById('portal'),
  )
}

export default Modal
