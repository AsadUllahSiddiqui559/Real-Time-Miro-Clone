import {create} from 'zustand'

const defaultValues = {id: "", title: ""};

interface IRenameModel{
  isOpen:boolean;
  initialValues: typeof defaultValues;
  onOpe: (id: string, title:)
}
