import React from 'react'

export const Setting = () => {
  return (
    <div>
      <h3>Settings</h3>
    </div>
  )
}


const SuperSelect = (
    {
      options,
      onChange, onChangeOption,
      ...restProps
    }) => {
    const mappedOptions = options ? options.map((i,index)=> <option key={i + '-' + index}>{i}</option>) : [];

    const onChangeCallback = e => {
      onChange && onChange(e)
      onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
      <select onChange={onChangeCallback} {...restProps}>
        {mappedOptions}
      </select>
    )
  }


