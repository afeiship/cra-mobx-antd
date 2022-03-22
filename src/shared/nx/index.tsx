import './packages';
import './styled';
import ReactIfElse from '@jswork/react-if-else';
import RCM from '@jswork/react-condition-manager';
import RSM from '@jswork/react-status-manager';
import ReactList from '@jswork/react-list';
import ReactAntSelect from '@jswork/react-ant-select';
import ReactAntRadioGroup from '@jswork/react-ant-radio-group';
import ReactAntCheckbox from '@jswork/react-ant-checkbox';
import ReactAntCheckboxGroup from '@jswork/react-ant-checkbox-group';
import ReactAntInputSearch from '@jswork/react-ant-input-search';
import ReactAntEditableTagGroup from '@jswork/react-ant-editable-tag-group';
import ReactAntTreeSelect from '@jswork/react-ant-tree-select';
import ReactAntTree from '@jswork/react-ant-tree';
import ReactAntSwitch from '@jswork/react-ant-switch';
import AntdFormBuilder from 'antd-form-builder';
import RctplAntSelectDefault from '@jswork/rctpl-ant-select-default';
import RctplAntRadio from '@jswork/rctpl-ant-radio';
import ReactEmptyState from '@jswork/react-empty-state';
import useActiveState from '@jswork/use-active-state';
import { RootStore } from '@/shared/stores/root';
import $api from '@/shared/services/api';

Object.assign(ReactAntSelect.defaultProps, { template: RctplAntSelectDefault });
Object.assign(ReactAntRadioGroup.defaultProps, { template: RctplAntRadio });

// inject react layout services:
nx.$rc = {
  rcm: RCM,
  rsm: RSM,
  ife: ReactIfElse,
  list: ReactList,

  // form control
  select: ReactAntSelect,
  tagGroup: ReactAntEditableTagGroup,
  radioGroup: ReactAntRadioGroup,
  inputSearch: ReactAntInputSearch,
  checkbox: ReactAntCheckbox,
  checkboxGroup: ReactAntCheckboxGroup,
  tree: ReactAntTree,
  switch: ReactAntSwitch,
  treeSelect: ReactAntTreeSelect,
  empty: ReactEmptyState,
  fb: AntdFormBuilder,
};

nx.$hooks = {
  useActiveState,
};

nx.$root = new RootStore();
nx.$api = $api;
