import clsx from "clsx";
import Image from "next/image";
import Select, {
  DropdownIndicatorProps,
  MultiValueGenericProps,
  MultiValueRemoveProps,
  NoticeProps,
  OptionProps,
  components,
} from "react-select";
import { DownIcon, CloseIcon } from "./icons";

import { Character } from "@/base/types";

// Custom components
const DropdownIndicator = (props: DropdownIndicatorProps<Character>) => {
  return (
    <components.DropdownIndicator {...props}>
      <DownIcon
        className={clsx(
          "transition-transform",
          props.selectProps.menuIsOpen ? "transform rotate-180" : ""
        )}
      />
    </components.DropdownIndicator>
  );
};

const MultiValueRemove = (props: MultiValueRemoveProps) => {
  return (
    <components.MultiValueRemove {...props}>
      <CloseIcon />
    </components.MultiValueRemove>
  );
};

const Option = (props: OptionProps<Character>) => {
  const searchString = props.selectProps.inputValue;
  const character = props.data;

  // Getting parts of string to highlight on search input
  const lowerCasedInputValue = searchString.toLowerCase();
  const hitIndex = character.name
    .toLocaleLowerCase()
    .indexOf(lowerCasedInputValue);
  const before = character.name.slice(0, hitIndex);
  const match = character.name.slice(hitIndex, hitIndex + searchString.length);
  const after = character.name.slice(hitIndex + searchString.length);

  return (
    <components.Option {...props}>
      <div className="flex space-x-3">
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null} // react-select handles change
        />

        <Image
          src={character.image}
          alt=""
          width={36}
          height={36}
          className="rounded-md"
        />
        <div className="flex flex-col">
          <span className="whitespace-pre">
            {before}
            <b>{match}</b>
            {after}
          </span>
          <span className="text-xs text-slate-500">
            {character.episode.length} episodes
          </span>
        </div>
      </div>
    </components.Option>
  );
};

const MultiValueLabel = (props: MultiValueGenericProps<Character>) => {
  return (
    <components.MultiValueLabel {...props}>
      <span className="text-slate-700 text-sm">{props.data.name}</span>
    </components.MultiValueLabel>
  );
};

const LoadingMessage = (props: NoticeProps<Character>) => {
  return (
    <components.LoadingMessage {...props}>
      <span className="text-slate-700 text-sm">Loading...</span>
    </components.LoadingMessage>
  );
};

// Custom styles
const selectStyles = {
  controlStyles: "border border-slate-400 rounded-xl bg-white w-96",
  placeholderStyles: "text-slate-700 pl-1 py-0.5",
  selectInputStyles: "pl-1 py-0.5 text-slate-700",
  valueContainerStyles: "p-1 gap-1",
  singleValueStyles: "leading-7 ml-1",
  multiValueStyles:
    "bg-slate-200/80 rounded-lg items-center py-0.5 pl-3 pr-1.5 gap-1.5 h-full",
  multiValueLabelStyles: "leading-6 py-0.5",
  multiValueRemoveStyles: { focus: "bg-red-300 rounded" },
  indicatorsContainerStyles: "p-1 gap-1",
  indicatorSeparatorStyles: "hidden",
  dropdownIndicatorStyles:
    "p-1 hover:bg-slate-100 text-slate-700 rounded-md hover:text-slate-800",
  menuStyles: "mt-2 border border-slate-400 bg-slate-50 rounded-lg",
  menuListStyles: "divide-y-[1px] divide-slate-400 rounded-lg",
  groupHeadingStyles: "ml-3 mt-2 mb-1 text-slate-500 text-sm",
  optionStyles: {
    base: "hover:cursor-pointer px-3 py-2 text-slate-800",
    focus: "bg-slate-100 active:bg-slate-200",
  },
  noOptionsMessageStyles: "text-slate-500 p-2",
};

export const CustomReactSelect = (props: {
  isDataLoading: boolean;
  setText: (v: string) => void;
  selectOptions: any[] | undefined;
}) => {
  return (
    <Select
      isClearable={false}
      options={props.selectOptions}
      isLoading={props.isDataLoading}
      isSearchable
      isMulti
      unstyled
      closeMenuOnSelect={false}
      getOptionValue={(data: Character) => data.name}
      hideSelectedOptions={false}
      onInputChange={(newValue) => props.setText(newValue)}
      components={{
        DropdownIndicator,
        MultiValueLabel,
        MultiValueRemove,
        Option,
        LoadingMessage,
      }}
      noOptionsMessage={(inputValue) =>
        `Couldn't find character containing ${inputValue}`
      }
      classNames={{
        control: () => selectStyles.controlStyles,
        placeholder: () => selectStyles.placeholderStyles,
        input: () => selectStyles.selectInputStyles,
        valueContainer: () => selectStyles.valueContainerStyles,
        singleValue: () => selectStyles.singleValueStyles,
        multiValue: () => selectStyles.multiValueStyles,
        multiValueLabel: () => selectStyles.multiValueLabelStyles,
        multiValueRemove: ({ isFocused }) =>
          clsx(isFocused && selectStyles.multiValueRemoveStyles.focus),
        indicatorsContainer: () => selectStyles.indicatorsContainerStyles,
        indicatorSeparator: () => selectStyles.indicatorSeparatorStyles,
        dropdownIndicator: () => selectStyles.dropdownIndicatorStyles,
        menu: () => selectStyles.menuStyles,
        menuList: () => selectStyles.menuListStyles,
        groupHeading: () => selectStyles.groupHeadingStyles,
        option: ({ isFocused }) =>
          clsx(
            isFocused && selectStyles.optionStyles.focus,
            selectStyles.optionStyles.base
          ),
        noOptionsMessage: () => selectStyles.noOptionsMessageStyles,
        loadingMessage: () => selectStyles.noOptionsMessageStyles,
      }}
      {...props}
    />
  );
};
