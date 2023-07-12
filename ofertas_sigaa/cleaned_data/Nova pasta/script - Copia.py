import os
import pandas as pd

# Get the current directory
current_directory = os.getcwd()

# Initialize an empty DataFrame to store the merged data
merged_data = pd.DataFrame()

# Iterate over all files in the current directory
file_path = os.path.join(current_directory, 'classes.csv')
        
        # Read the CSV file into a DataFrame
data = pd.read_csv(file_path)


        # Merge the data with the existing DataFrame
merged_data = pd.concat([merged_data, data])

# Remove duplicate rows
merged_data.dropna(inplace=True)

# Save the merged data to a new file
output_file = os.path.join(current_directory, 'merged_data2.csv')
merged_data.to_csv(output_file, index=False)

print("Merged data saved to 'merged_data.csv'.")
