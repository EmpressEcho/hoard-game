def create_list(raw_data, expected_sort):
    result = []

    for x in expected_sort:
      for y in raw_data:
          if y["id"] == x:
              result.append(y)

    return result