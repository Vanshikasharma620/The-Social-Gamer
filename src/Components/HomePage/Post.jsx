let Post=()=>{
    return(
        <div class="feed">
                        <div class="head">
                            <div class="user">
                                <div class="profile-photo">
                                    <img
                                        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgVFRYYGRgaHBoaGBwaGhgaHBgcHBoaGhoaGhgcIS4lHB4rIRgYJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHxISHzQrIyw0NDQ0NDQ0NDQ0NjY0NDQ0NDQ2NDQ0NDQ0NDQ0NzQ0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NP/AABEIAPUAzQMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAACAQMEBQYAB//EAD0QAAEDAgQDBQcBBwQCAwAAAAEAAhEDIQQSMUEFUWEGInGBkRMyobHB0fBCFFJTcoKS4TNiovFDsgcVI//EABoBAAIDAQEAAAAAAAAAAAAAAAIEAQMFAAb/xAAsEQACAgEDAgUEAQUAAAAAAAAAAQIRAxIhMQRBBRMiUWEyQnGBBhQVkaHw/9oADAMBAAIRAxEAPwDgiCEIgvTng2KEq4JUILOAShcEoC4g6EsJQEoCg44BEGo6bJsDdC8ga2/OaGwtDq+wgalLUj3akGY1/PzVEXayJGWZ6THwsobCUDiY1TTqzefwI+YQ1KoykkwBv0VfWrmbEkG2pv8AlvVRJ0rCjC9qJzsUBqPNHTxLHbxeLqPhnjKWOPX+UdT6RugzBxcwNAt8Wm8jbXTrsg1MsWJUWMJQ1NYL3Y2EOHMSJ9LO9Ang4IoyvYrnhcVfY7Kuypokk9I/CfRI7ENkjlr4/kIiuh2EkIg6dEhC4ihISEIoSQpBBXIoXQuIohBEEgRAK0sYqVcFwCEEUBEEgRBQcKAihIlAUBHFxEEayITb8SJhxhp5mIPLwXPqAQ46A6+RuqbGVy4OIsGjNfloPMkhVTkk9xnDq4RYvrNabERyP30Kao4o3aDoCPUz9gqXF4kBpBMwBPjrEqsbj3FzY18dQDEfA/BVyzxQzDpZSTZq3FpblNhnueQiSfJV4xInuiNQBHUwPSE3UxIaLnaT+dYQcNOZzYGZ1oHPcrnLU0jo46i2y34fTaapDzmyhznToCc3d/4ykwbQ17/5n5d4nLHyPopH7G4ZoBzOJc4iPgfP4lV+Krey1c1v9Uu84GqsUe7ItvaKLjh5kEHf3eoAj6kKO6m+xA7wJaeo2PpZVuB4y0O7xB2Go11NtVoOHlr7yLSRpcEmAY3BB+CHZO0HobjpkVOLxDmjJfNqY1uJDR1j83TDsO/K0lzgZhrGQBJ5kgknmbK1rUO86oQCQS0G8gTr8r/5TOHokn2jtW22gN5jx+iJxvdlH0bJErB4ctaASSdyb3N0/CHFYtrAB+qIg7eICMHQ89ESFpx33OhDCJIVJWxISQlKRcCQgjCEIgriWclAXBGAhIOASPMBGAkqaHwKEmhtlQHRPHQ+Cz/7S5uWoNDBtvzHTS6uqdcFoc3QiR+fmirjPU6L5YXHcg4x+Z2We6LnqYEDyBnzHJQOIVRmLQYnLp0KSrXDaZeRreLXvPyLfgFVMzPd3TcXJIkNBvceSpnJftj2HC+XwiBjsRd0EEGft8hZMYem9zpa0kayAtJguH02STLjYkuvA6N90eclSMVjmwA7NezGiA5x68h4eqVcI/VJ18D6y/bCN/JR4em55dnLg0XdAOn7oJ+lh6A6bgQDW5mMhx3JJytnmbkn83hupwsyxhAbJl/V2uUTd0eengtE2i1jcjBBHvHeeQ5lXYlFblGaTe3BW8QxRpw05i46AGI9bDxPl0pyMxu1oO4EucP6gCVev4aAC8kl531DOs8/wQm2YJwgFxn+qT1MFNK2K6oxK+rwdmXMZJ10Lb+Gp+Cq8RxJ9IwAQ3mCLSAr9zGtMB7M50Ac5zue7iB6KO/hwqCXsJPUFvwBFlMo2vTyWRdbzTaGMBxUPbDnZTNj9wPnsrVlQs7p5SLWImY8Pzks/icEWiGgZf3ZI85jXqpmFrwzKHB7J7rhBdTd+64fun0+aiLktpAzxxfqgSOIVCXn+UkHnYa9RHyVrgXZmjoAJ62n6fFUmIq5miPeb3XDzsfmI6BW/BjLD0MfI/MlS9hbJH0k0pITuVDC6xZxG4XQnIXQusjSVzUoSBEFcwAgEQSAIghYSCATeJIiDobJxVnGsYGtjUki3O432QydK2WQg5SUUUntHUXGm4HKTIPMHl1H5pc6OLc0EB2s2iwO/l9kj+I0ajcrhDho4C89SNOqp6r4MA93mOQ5lZ856XcXsa0MevaSp9/kl8RxTcjGm5iA2SJjdx1AQMxBAazugnQAWkTeBcm2/huqZlWXFxi2k89vLf0Vv2doEvdWcRkbESQSZIDLbZnXvc5QqFkcpJe468KjB/G/7LeozI2DJOpnUnS4HioHCnxXNSoA4sGbKLhkGGtHN0lom9/MguMYos9oc3fc7I2Do1ph58ZBHg4crNcBBDy2pLJgkuAaQwWzNzDLYxJOguJhVZsiWSlwh7o+il5Dm+WadlR73l7nN6aDIN4PXUmdlaN9p7rQP5jMDw3KznCuGsMPrPOZxJDGVHSJHdaHSZLdYA1i50OyoF+QMYxwaJIzZGAk/wC0CW7mzRqUrPq5NPyrv8bDf9tx2vMar2MP2g45VoVDTBHOS1w9Mwg+ItfxTnBsYarCTUzPucrjBAmPdETzmFtsRwj2rctRrHN5ODqg8RMQb6qkqf8AxzTLszKr2cgASBHIudPxWh0nUzpeYnf5Euq8Oxb+U0U+O4k7DuB9k0tduJbDhq0iDBGo6Hxi44dXdWYHBrLgWcSf/UwptPsdUyljsQKrSIh9O/Qh7XzPXUKmxXYOszOabw4EHKA7KdfddIAcIm8jwWis0HwzOl0bSprjvzZDx+ILqzKVJtJ5OpDnQDJkTB5DmoNZjmEnKGOuHQZmDA90wR46Hkp+C4Q3Dtz4iGONgHSMvMCfedAOlonWbVfazEUnR+z1A4Ey5sPhjojM0kRcGD4DmVE5yUkkrTXPsW4ulhKD3pr/AGIziBJhwy9bXG1+S0XZ2tOYbWcPOR9AsS3DVG5XPa5gJIdmEAxaY1BPK1xyWg7O4nvOAjy2+/1QY8jlyKdd0yxxdGyDlyQBdCuMdnQuXLoXHFcEQCEIwFeysIIgkARAISUjgq3jWED2iR3hMGJ8ZG4VqGpurTDhB/6QNJqmWQbhJSR5dje46LdYPzBuE17aGn/d8ld9o8CA4kgT5AjkesrLVwWj5LGzpxk0en6dxyxTFDC45WmTJgTy1ceQA/LK5p4tzcO2mx4JbFRwkGAHAAazImbxzCicLwmRpqvIDSCJ5DITfxJaBz9EmHPsWMLRmqP70bCPc05TJmLxykUqTituTQWONrVxyWfE+JsZUY5zCXFkuBg5LOyQ02zZrmZsLaqS3BVMWWmqXNp8jAc/TvECzRYWH0CZ4PwkF3tapzPJno09B+RFlf4nFCmAem2vl1SuTN6qXI9ix3G3x2Rf8BwlKiA2kxreZi56l2p81o2Yui33qjJGsGY9FguH8NrYkgve5jNmsJH9xESrwdiKBHec4nx0/wAJnCm1uVZWr2Lar2rwrHZS++wDXE/JW2A4lSrNDmOBm/IxzjVYPEdjfZyWOzN2BuQPqm8AXUntIlpaST1MARB2N/Uq+1F0yrS5LY9OELiFW8KxJcJ/NBzVqXhHZVJVyRMThWvaWvaHNOocAQfIrFcU7C0c5ewODYMsDoE82uNxvY/BajHcYbTN+d/QkX9FSVu2NFpyv/qcNidRGtuiuhq4RU6W7Rme2FBgwRa0uGRzA28kZWnK3vHMSZ8spk6TC7J8PLWtDrOcJI0gTYFavjgYaZqMILHtIfBs5jhEmOU6/YLPcBqOc/lAgkbS6LHyHp1R9Pi0yd/oS8Vy6sS09+TVNdtyRQlayBA2XQmjzlAELkS6FINFW1ONQNRgK9lSDajCBqKUDDQYTdbLHeI9UYKLKhC5MVxvCBxkZZ5hpkjoQcs+QWXx2CcA0uBF9xffXkvU8RhuU/CPisZ22Y4NY1ocQc2YgWAtckDTXVJdThjpczZ8P6mTyLHRlMbijUcWj3cxIEkzsCSTsPDdWWDpnNJOZxAE8hMBrRsNFBw1EN1E2mek/VXfDAHQd5+V/t6LFyTNzU5zUVwXWGblEKVhcIa1Roiw71wSPC1wojxK0XAMKC6Yk2ubj+3Q+aWhHVNGw9oB8TxbqDMtNku5NDi7yaWtP0WQxOJx7jJp5QQZNRrn6NLuRDZgNsAJIG5XqD+Gsd7vdeP1tAkdLgpyiyoyzmB3+4G58bLUgmtq2+BKfqWz3MfwzDYj2DKzoIuHeyJY9kGC8Mu2oALkFs623VniMPnpZzlfu2oyweDzA0dzErTMfOtOPEhNVaDGMcGMa0PMuAmDubaT1hW5UnF0V4XKLp7lPwDFn3SVqMTWhhI2ErK4XDw6eq1DCHN8Qqemb+4s6qK5Rh+IOfUBgQ2ZkmPNVNDsw2p+tg8IcfLkrztEyoxrnU2M7pAa57c/6S6WM0FrSdSs9wiriKz3S5lR7Q4gFoh2Vwa4NqMILSbFp00Wjqd+lbCEnFJJvcTinAK+GY51OoX03Ah7diDqcu2puFL7JYY5A4Du2JPONBO97lWXCuLNr03AmdbG5AMjK+wkiDeL2KlcJw+SixuwaPv9VfF2rMrxHZKJMAXEJcq4qTIoApIRLlxFFU1OBNtTgTDF0EEQQhG0IWGgmhHCQJZQhpDdZ2VpcdgsKziVcVHvfSJpWzcwDo4DlG3JbbiLu4ev0kj5KrLwxlR7pyHNYCXOAsAJ6LD8TzPWodqs9d4B00fJeXu3X6RiuK4ANOZvuvEA9ZkD85peCnKIOoKsuIhtSlSyAt7twdRFrxuPootLDRBJWencaZpSwVPUuC2w93eC2nCWBjQ1up94jboFjeFOvJ2P59FqOGVohDB6ZjbVxNVg6VlPFNQcC9TX1w0SStPGZ8+RCyFX49s2J8kOK4i7KXMEDYm2Y9OnVZSnxwtqObVOV4Oh3GxHT/KjLkjF6WHixya1Itaj8jspCt8C8wAVmanH6D7Z2E8szfurjgPE2PJB1GirxySlSLMibjbLd7bwN1W18NTknLkcRBLe6SOpGvmpmNxrO7BuXBTcgcLwU+rjTM/aVow+F4Kym+oWTldzmx3BnntPNWjQrnHYcZDbZU4CZhLUjH8TjTX7BSIoXQrDJoGF0JSllcdRTsTgQNCcATDFkEAjaEATjUDCQQCIJAlCgsRC4v8A6TvzUEJP2X2jgwQGtHwAUjG0M7HNGpFp0kGQD0MR5qq4e8l4Y50QIINnW2dz1WD4pjl5il2o9j/H8sfIcL9Sd/pkbiGEAa8gAQ8DwEABVNRkLR8RwmUPOYkOAEG8QZF1QVHSs2BtZOQsB8ytFgXXCoMINPFXuEPeHip+46P0mpoVsrcxQMql5l/u7N59T9kzjGECmNoLj5QB81Gq4jKZtotaLUY7ciElqkTuJPzNtt8VluLYFlYRVYLTBMyOcOF4UnE9p6FOzntnkCE7h+0+GfEtd45HEHzASuSCm7umM43KK01aMlW7KYeLSOuaf8rsLw6rQB9kHQNJJA5WJsB4LfYbE4OqO7lPUG4P4VIOApbPPgdEz02FJ3J2hbqcjqoqmYLszQxb6pfXeQ0HKG2II1t9zdenYHG94sdqLjqDuqV2EyOlp8eSLitQMyVdC0wTc2P0TWdJQWm9vcUwW5NS7+xpsSQWrOvbBKsGYsOYHA6hVxdN1ZgXpszvFUlFLvZ0JCEqQq4xRCF0IlyIiimaU4E01OtTDFEEE4E2EQKBhIcBRSgCVQGmESsf21fUoup4imdO68bHds+p+C15ULiuCFak6mdxY8nC7T6qrNjU4NDPSZ3gzRmv+Rk8P23Y9uWqwtkRI7wn5pltSSsy7AxUNMiJm3IgwR5FXmAcbA6i3ovPzxKN0j22PM8iTbLzDiysqD1AwzZCkwYtsl2huLN7hQ2rRYdYsfkVhu2vCMR7Rjabop1CGZpPccTfN0IiDz5WnRdkseCXUydbjx3V7jILS0gHYg3kJ+L1Y/kUdxn8HnHCexbWGahBPeBJvDgJab7EX8AtPi+0GBwvsPaPY1xZIDWl8tgQ4hoNpmDvfkVn+0XZR9Ql1Cu9pknK97nMkiDlNy21t1h8R2JxjT/pZhza4Onw3+CrjBxdvcLJNtVHY9bwfaLheIYZqURJMB+VjveMQHQfRO8V7NUn96hWfTeQMuSo5zdQJyOJaRdeD4vhdel/qUqjBzc1wHrELRdhuKtw9drnODQQ4OvaNb+aYhO5JNC2mW7t7di84H2qqNquoVyC5rnMLhvlcW6DQ2Wk4li5YWjvF/dbF7n7CSqHhXYsVXmoandc4vJAkkFxdAJ5yL+K9CwnCGMDSQIZfz2/OqvU5eW4y57HOEVJSv8AJAyFlNrN7D1ShdiKud9tB/0hTeKOmCR57xPNry0g5SFdK6VYZ1nErpSJFwLKlqdaE2E6xMMXihQE40IQEbUDCSFASrlygOhYSELpShcSYXthg8tanVaLOMHx0+NvRVjDlqeN/VbDtbTzURzDgVmMXhiWB7dWx59Fj9bFRyJ+56jwnI54WvZlvhXqxYPis5gsXLQfweKucHigRdZ2SLW5uY5p7EjDVDSqtI5hw+oW8qPD2h7dxdYLGtzAPH6TdaPgmP7mUn81RYMm9PudljatE3LeCLKdSpADUIKlIEBw80+xgjVOxVMWk9gAwHYFUvEOz+GeczsPTLueRsnxMXVrVwxkFpjWbIajSBqmopPkWlJrdDHDmxb4Jzi2MyjID1d56DxXYZ2UOcdlQZzUeSdJk+OwV8YKUr7IUzdR5cLfLJtJsC+pufsjQhyUFXHnZz1Scn3CXFIuUAipQkKWVxJUNTjSm2hOtTDFUEEYKAIwgYaClKhARQoDR0riUhKGVxAzjmB1N7SJBafkVnMBTDqYHRaSv7rvA/JZ/hPuDwWV4ptp/Z6X+P761+ClxOFNN8jQo6dRzTIV5xHC5mqjpt2KQhLUtzclHTLYm0cZLSJudfzZTOE8QDTGaLnxPT85Knq4fcKPlIIO/wCbqfKT4O8xrk9NwHEo7riIJAHh+SruiQ64heW4fiLoAMLScN47AmdIn7K2DktmBPTLdG4DNVCxDIUahx1haCSI/JTOP4uyM0jRPYk29hPI9O7G+KV4ZlGpgeqrqTYCi0MQX986Gco+qkNcn4w0xo8113Ua56VwiQHIwUwHJxrlzQmmPAogU0CiCFoJMNIuXKCSraE41NBONTDF0OBE0IGo0DDQUrihJSEqKJsWULihlISiSIBrHuu8D8lQcI91vgrfHVMrHuOzXH4FVPCRYLI8V+1fk9L/AB7ib/BbvZLVQYuiGuJ2WlY2QqrH07+ayYumejkrRCZSkJt2HVjRpxqjfQTUZFMolM7DSnKLHN3tyUx7ClZh3HZN4vU6F8npVsBuaIB+ev4SpVHBfqeS7k3QT153T2Hw8KU1nNamHEo7syeozOXpQ3TdZPtcmDYomuTDR5rLtN/kktKdaVGa5OtKBohMfaUYKaanGqtlqHAUqEFKhCRVhG1NtKcar2LINpRIAiCENHJCUQCdbRJVeTLGCtsvwdPPNKorbu/YXA0g8mdtR8l3aMmlhnVGiQyC4DZs3d5aqVh8MGlzhILgPC3/AGrJjQQWuALSIIO82usfLnnKV2emwdJjxw01+X7nlvFeMF9BndLTUMid2NOscibeRUzhZgBNdreEVGYkl92OA9mQIAaLZI2LfjM7lO4CRCTz55ZH6nxsaXSdNDCqgqT3L2i5Q8Td8J2nUsoj39+VRHdjb4LFmFlso6eHJtCkYN1rq4wFVkwQExji3yUzlXBSN4QdSEf7HGy1+RpUbEMaNAtPBUXsZ+aTkjNOw8JPZbqyrtkpqo2yfUzOePcj4Xg/tGZw6CSeosSEWJ4f7JuZzcw0nX4K14GJp+DnfMlTcTRDxldpadpvKplnmpON7FP9LjvVW5nW4bPRc/KAQe7AiWjW35ooLCtiKYjKBYWAWa4jgvZut7p06dFZhy3cWJdb0+mpxW3cZYU61MNTzSrWJRHAUSBqOUDCRVNTjU01GCmGLocCUIQU4zCvJBFh1EpfNnjCLd7+w703STzTSppe49RpFTadCNSuw+EcbOe7ya0fMFBX7PuecwxNYD92QB/xAWPLI5yuR6fFhjiiox4RPpsHNSWMCpX8A5ueeuYyhZwtw92vVb0JzD0cp0Rlww9TRc47hzazCx9xqDaWnYg81Rv7IuHuPB6OBHxE/JS2U8Uy7ajKg5PblPq2FZ4HiLswbVplhO4Ic2fHb0VUumjLdlkc8o8GXrcErM1YSObe8PhdVTqUO68l6m+qGgzAAEk7AcyoTvYV25ixjxMElpa4HkZAcNR6oF06W6ZcurbVNGNw2ieo4jK4HqtR/wDS0Xe7mb5yPQqDW7Mm+R7fMEfdHoaOWaL5JlKq0tkFQa1WSnKHA6rRBeyPF32U6jwhrfeeXHpb7pzHOMVb5E8m7pFS1hcYFyrCnwou94wPj/hWNKk1tmtA+frqnjYXUyzPsVaUQ6eGZTbDRA/N1E9u57srG/1OmPIalPVHF7o/T81JoMDDooulb3ZT9UtuBgYV0gOdHPLYHzN0mJ4ax/vA+Mmyn1RumnmLboVN8phyxxrS1a+TJY7h7qZnVmzvoUwwrXvphzS0iQdVn8bw1zCS27dhuPuncee9pcmP1PRuD1Q3Xt7EMFGm7g3RSrmJIjDh1TeyfpcPG5K0QLTZwj85IH4TcX8FnZZzl3Z6TFgww4il+iuo4MDT5BSWsITrGEJ5rEq0+46muwwwKXTPx+aHIlaw6bbqNLOscDkrqbXahHkEJp1Nw0uuivk5safgf3HR0Nwo9WnUbq3MOn2Ur9oj3hHkiZjmfvgeY+qsSmuNwG4sYo8RH6gfMfkqSMez16J5pY7cHyCNtJg0MIr90DXsxuhWDjZSZuUyQ2dvJHmCk46o2GktALgDlnSYtPSU3g/aZP8A9C0ukwWiLWiRz1ToeOaJrxzUUyGGxsXUKs8vMDRSX1JtMIc7WjWFK23AlvsCylCOyiP4lTBgOzHk3vH4I2VHO0aQObrfBS0+WCqWyH3PSNCVlHmZKdhRaXAdN8jeVA+nOqccEJYN1yZDRFqUGbtB+KZOBZ/Db8VNLxsJXQecKxSku5W8cHyl/gZxFIGSojXlhgHaVy5Qi37ScxocJIulbTCRcoZyHfZBd7MQuXKtliGwE5C5cgaDRzmAqNiMCw6tB8ly5RB0zpIr3cKpnaPAkJHcGA92o9vg4/dKuTCkylxRHGCI/wDLU/uK52GP8Sp/cVy5WpsraQJ4YT/5an9x+6dZwo/xan9x+65co1M6kPN4Sf4r/U/dSWcDpz3i53iVy5DKcvc7SiyoYVrR3WgeATpSLlS2WpAkpCkXLkCwXOTEybrlysRDH2hKFy5ASf/Z" />
                                </div>
                                <div class="ingo">
                                    <h3>Ninja</h3>
                                    <small>Australia, 15 MINUTES AGO</small>
                                </div>
                            </div>
                            <span class="edit">
                                <i class="uil uil-ellipsis-h"></i>
                            </span>
                        </div>
                        <div class="photo">
                            <img
                                src="https://img.theweek.in/content/dam/week/news/sci-tech/images/2020/10/31/gaming.jpg" />
                        </div>
                        <div class="action-buttons">
                            <div class="interaction-buttons">
                                <span><i class="uil uil-heart"></i></span>
                                <span><i class="uil uil-comment-dots"></i></span>
                                <span><i class="uil uil-share-alt"></i></span>
                            </div>
                            <div class="bookmark">
                                <span><i class="uil uil-bookmark-full"></i></span>
                            </div>
                        </div>
                        <div class="liked-by">
                            <span><img src="./images/profile-10.jpg" /></span>
                            <span><img src="./images/profile-4.jpg" /></span>
                            <span><img src="./images/profile-15.jpg" /></span>
                            <p>Liked by <b>PewDiePie</b> and <b>2,323 others</b></p>
                        </div>
                        <div class="caption">
                            <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span
                                class="harsh-tag">#gamer</span></p>
                        </div>
                        <div class="comments text-muted">View all 277 comments</div>
                    </div>
    );
}
export default Post;