const ContactLabel = ({ label, placeholder, required = false, type='text', name, textArea = false, value, onChange, id, missed = false  }) => {
  return (
    <label htmlFor={id} className='flex flex-col gap-2'>
        <p className='text-lg lg:text-xl'>{label}{required && '*'}</p>
        {!textArea 
            ? <input 
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                id={id}
                onChange={onChange}
                className='p-3 bg-gray-100 placeholder:text-gray-500 w-full outline-none'
        /> 
            : <textarea 
                name={name}
                placeholder={placeholder}
                value={value}
                id={id}
                onChange={onChange}
                className='p-3 bg-gray-100 placeholder:text-gray-500 w-full outline-none resize-y max-h-[400px] min-h-[150px]'
            />
        }

        {missed && <p className="text-gray-400">{label} is missing</p>}
    </label>
  )
}

export default ContactLabel