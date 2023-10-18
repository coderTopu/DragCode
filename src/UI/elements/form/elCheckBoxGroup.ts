import { IComponentType } from '../../../../type';
import { CircleCheck } from '@element-plus/icons-vue';
import { helper_Input, helper_opt, helper_Radio, helper_tab } from '../../helper.ts';

export default <IComponentType>{
  tag: 'el-checkbox-group',
  text: '复选框',
  _ID: '',
  tagIcon: CircleCheck,
  isShowPointer: false,
  value: '',
  _opt_: helper_opt('选项框', 'el-checkbox-button'),
  attrs: {
    size: helper_Radio('尺寸', [
      {
        key: 'small',
        value: 'small',
      },
      {
        key: 'medium',
        value: 'medium',
      },
      {
        key: 'large',
        value: 'large',
      },
    ]),
    option: helper_tab('option配置', 'first', 'card'),
    value: helper_Input('默认值', '1'),
  },
};
