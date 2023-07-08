import { renderHook } from '@testing-library/react-hooks';
import apiData from '../constant/data';
import { useCountryInfo } from '../index';

describe('useCountryInfo', () => {
  test('deve retornar os dados iniciais corretamente', () => {
    const { result } = renderHook(() => useCountryInfo());
    const { allInfo, callingDDIInfo } = result.current;

    expect(allInfo).toEqual(apiData);
    expect(callingDDIInfo).toEqual(
      apiData.map((data) => ({
        countryCallingCode: data.countryCallingCode,
        flag: data.flag,
        flags: data.flags,
      }))
    );
  });

  test('deve retornar corretament as informações de ligação', () => {
    const { result } = renderHook(() => useCountryInfo());
    const { callingDDIInfo } = result.current;

    expect(callingDDIInfo).toEqual(
      apiData.map((data) => ({
        countryCallingCode: data.countryCallingCode,
        flag: data.flag,
        flags: data.flags,
      }))
    )
  })

  test('deve retornar corretament as bandeira', () => {
    const { result } = renderHook(() => useCountryInfo());
    const { flags } = result.current;

    expect(flags).toEqual(
      apiData.map((data) => ({
        flag: data.flag,
        flags: data.flags,
      }))
    )
  })
});
